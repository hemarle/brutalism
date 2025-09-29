'use client'
import {
  Email,
  EmailApiResponse,
  getEmails,
  ViewFilter,
} from '@/actions/apps/email/get-email'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Paperclip, Star, Search, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useCallback } from 'react'
import { useDebounce } from '@/hooks/useDebounce'



function EmailList() {
  const searchParams = useSearchParams()
  const [emailResponse, setEmailResponse] = React.useState<EmailApiResponse>()
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Debounce search term with 1000ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)

  // Track if search is being debounced
  const isSearching = searchTerm !== debouncedSearchTerm

  const [filter, setFilter] = React.useState({
    page: 1,
    limit: 15,
    view: searchParams.get('view') as ViewFilter || 'inbox',
    label: searchParams.get('label') || '',
    search: ""
  })

  // Handle search input change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm("")
  }, [])

  // Update filter when debounced search term changes
  useEffect(() => {
    setFilter(prev => ({
      ...prev,
      search: debouncedSearchTerm,
      page: 1 // Reset to first page when searching
    }))
  }, [debouncedSearchTerm])

  const paginateNext=()=>{
if(filter.page < (emailResponse?.pagination.totalPages || 1)){
  setFilter((prev)=>({
    ...prev,
    page: (prev.page || 1) + 1
  }))
}
  }
const  paginatePrev=()=>{
if(filter.page > 1){
  setFilter((prev)=>({
    ...prev,
    page: (prev.page || 1) - 1
  }))
}
  }
  
  // Update filter when URL params change (but preserve page for pagination)
  useEffect(() => {
    const searchView = searchParams.get('view') as ViewFilter
    const searchLabel = searchParams.get('label')
    
    setFilter(prev => ({
      ...prev,
      view: searchView || 'inbox',
      label: searchLabel || '',
      // Only reset page if view or label actually changed
      page: (searchView && searchView !== prev.view) || (searchLabel && searchLabel !== prev.label) ? 1 : prev.page
    }))
  }, [searchParams])

  // Fetch emails when filter changes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await getEmails(filter)
        setEmailResponse(data)
      } catch (error) {
        console.error('Failed to fetch emails:', error)
        setEmailResponse({
          success: false,
          data: [],
          pagination: { page: 1, limit: 15, total: 0, totalPages: 0 }
        })
      } finally {
        setIsLoading(false)
      }
    }
    
    console.log('Fetching emails with filter:', filter)
    fetchData()
  }, [filter])

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center py-8">
        <div className="text-gray-500">Loading emails...</div>
      </div>
    )
  }

  if (emailResponse?.data.length === 0) {
    return (
      <div className="w-full text-center py-8">
        <div className="text-gray-500">
          {searchTerm ? `No emails found for "${searchTerm}"` : 'No emails found'}
        </div>
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="mt-2 text-green-500 hover:text-green-700 underline"
          >
            Clear search
          </button>
        )}
      </div>
    )
  }
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">
            {searchTerm ? `Search Results` : 'Emails'}
          </h3>
          {searchTerm && (
            <p className="text-sm text-gray-500">
              Showing results for &ldquo;{searchTerm}&rdquo;
              {emailResponse?.pagination.total && ` (${emailResponse.pagination.total} found)`}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search emails..."
            name="email-search"
            id="email-search"
            value={searchTerm}
            onChange={handleSearchChange}
            className={`border-2 rounded-lg border-gray-300 px-3 py-2 pl-10 pr-10 focus:border-green-500 focus:outline-none min-w-[280px] transition-colors ${
              isSearching ? 'bg-green-50 border-green-300' : ''
            }`}
          />
          {isSearching ? (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
            </div>
          ) : (
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          )}
          {searchTerm && !isSearching && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              type="button"
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <div className="">
          <input type="checkbox" name="" id="" className='cursor-pointer' />
        </div>
        {/* Pagination */}

<div className="flex items-center space-x-4">

       {Number(emailResponse?.data?.length)>0 && (emailResponse?.pagination) && <p>
          {((emailResponse.pagination.page - 1) * emailResponse.pagination.limit + 1)} - {Math.min(emailResponse.pagination.page * emailResponse.pagination.limit, Number(emailResponse?.pagination?.total))} of{' '}
          {emailResponse?.pagination.total}
        </p>}
<div className="flex items-center">
  <Button onClick={paginatePrev}  variant="ghost" size="lg" disabled={filter.page === 1}>

<ChevronLeft  strokeWidth={1} className='rounded-full bg-gray-200'/>
  </Button>
  <Button onClick={paginateNext} variant="ghost" size="lg" disabled={filter.page === (emailResponse?.pagination.totalPages || 1)}>

<ChevronRight  strokeWidth={1} className='rounded-full bg-gray-200'/>
</Button>
</div>
</div>
      </div>

      {emailResponse?.data.map((email) => (
        <div key={email.id} className="">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <input type="checkbox" name="" id="" className='cursor-pointer' />
              <button className='cursor-pointer'>

              <Star size={16} stroke={email.isStarred ? 'orange' : 'gray'} fill={email.isStarred ? 'orange' : 'gray'} className={email.isStarred ? 'text-yellow-500' : 'text-gray-400'} />
              </button>
              <div className="">
                <p className='font-semibold my-1'>{email.subject}</p>
                <p className='truncate max-w-100'>{email.body} </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {email.hasAttachments && <Paperclip color='gray' size={16} />}
            <p>{new Date(email.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default EmailList
