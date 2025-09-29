'use client'
import {
  EmailApiResponse,
  getEmails,
  ViewFilter,
} from '@/actions/apps/email/get-email'
import { Button } from '@/components/ui/button'
import {
  ChevronLeft,
  ChevronRight,
  Paperclip,
  Star,
  Search,
  X,
} from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useCallback } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

function EmailList() {
  const searchParams = useSearchParams()
  const [emailResponse, setEmailResponse] = React.useState<EmailApiResponse>()
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Debounce search term with 1000ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)

  // Track if search is being debounced
  const isSearching = searchTerm !== debouncedSearchTerm

  // Initialize filter state without causing re-renders
  const [filter, setFilter] = React.useState(() => ({
    page: 1,
    limit: 15,
    view: (searchParams.get('view') as ViewFilter) ,
    label: searchParams.get('label') || '',
    search: '',
  }))

  // Handle search input change
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
    },
    [],
  )

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm('')
  }, [])

  // Update filter when debounced search term changes
  useEffect(() => {
    setFilter((prev) => {
      // Only update if search term actually changed
      if (prev.search === debouncedSearchTerm) {
        return prev // Return same object to prevent re-render
      }

      return {
        ...prev,
        search: debouncedSearchTerm,
        page: 1, // Reset to first page when searching
      }
    })
  }, [debouncedSearchTerm])

  const paginateNext = useCallback(() => {
    if (filter.page < (emailResponse?.pagination.totalPages || 1)) {
      setFilter((prev) => ({
        ...prev,
        page: (prev.page || 1) + 1,
      }))
    }
  }, [filter.page, emailResponse?.pagination.totalPages])

  const paginatePrev = useCallback(() => {
    if (filter.page > 1) {
      setFilter((prev) => ({
        ...prev,
        page: (prev.page || 1) - 1,
      }))
    }
  }, [filter.page])

  // Update filter when URL params change (but preserve page for pagination)
  useEffect(() => {
    const searchView = searchParams.get('view') as ViewFilter
    const searchLabel = searchParams.get('label')

    setFilter((prev) => {
      const newView = searchView 
      const newLabel = searchLabel || ''
      
      // Only update if values actually changed
      if (prev.view === newView && prev.label === newLabel) {
        return prev // Return same object to prevent re-render
      }

      return {
        ...prev,
        view: newView,
        label: newLabel,
        page: 1, // Reset to first page when view/label changes
      }
    })
  }, [searchParams])

  // Destructure filter values to use as dependencies
  const { page, limit, view, label, search } = filter

  // Fetch emails when filter changes - only when actual values change
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await getEmails({ page, limit, view, label, search })
        setEmailResponse(data)
      } catch (error) {
        console.error('Failed to fetch emails:', error)
        setEmailResponse({
          success: false,
          data: [],
          pagination: { page: 1, limit: 15, total: 0, totalPages: 0 },
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [page, limit, view, label, search])

 

  if (emailResponse?.data.length === 0) {
    return (
      <div className="w-full text-center py-8">
        <div className="text-gray-500">
          {searchTerm
            ? `No emails found for "${searchTerm}"`
            : 'No emails found'}
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">
            {searchTerm ? `Search Results` : 'Emails'}
          </h3>
          {searchTerm && (
            <p className="text-sm text-gray-500">
              Showing results for {searchTerm};
              {emailResponse?.pagination.total &&
                ` (${emailResponse.pagination.total} found)`}
            </p>
          )}
        </div>
        <div className="relative w-full sm:w-auto">
          <input
            type="search"
            placeholder="Search emails..."
            name="email-search"
            id="email-search"
            value={searchTerm}
            onChange={handleSearchChange}
            className={`border-2 rounded-lg border-gray-300 px-3 py-2 pl-10 pr-10 focus:border-green-500 focus:outline-none w-full sm:min-w-[280px] transition-colors ${
              isSearching ? 'bg-green-50 border-green-300' : ''
            }`}
          />
          {isSearching ? (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
            </div>
          ) : (
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
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

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div className="flex  items-center">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          <span className="ml-2 text-sm text-gray-600 hidden sm:inline">
            Select all
          </span>
        </div>

{/* Loading emails */}
{isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
           ) : null}

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {Number(emailResponse?.data?.length) > 0 &&
            emailResponse?.pagination && (
              <p className="text-sm text-gray-600">
                {(emailResponse.pagination.page - 1) *
                  emailResponse.pagination.limit +
                  1}{' '}
                -{' '}
                {Math.min(
                  emailResponse.pagination.page *
                    emailResponse.pagination.limit,
                  Number(emailResponse?.pagination?.total),
                )}{' '}
                of {emailResponse?.pagination.total}
              </p>
            )}

          <div className="flex items-center">
            <Button
              onClick={paginatePrev}
              variant="ghost"
              size="sm"
              disabled={filter.page === 1}
              className="p-2"
            >
              <ChevronLeft
                strokeWidth={1}
                className="w-5 h-5 rounded-full bg-gray-200"
              />
            </Button>
            <Button
              onClick={paginateNext}
              variant="ghost"
              size="sm"
              disabled={
                filter.page === (emailResponse?.pagination.totalPages || 1)
              }
              className="p-2"
            >
              <ChevronRight
                strokeWidth={1}
                className="w-5 h-5 rounded-full bg-gray-200"
              />
            </Button>
          </div>
        </div>
      </div>

      {emailResponse?.data.map((email) => (
        <div
          key={email.id}
          className="border-b border-gray-200 last:border-b-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-3">
            <div className="flex items-start space-x-3 min-w-0 flex-1">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
                <button className="cursor-pointer">
                  <Star
                    size={16}
                    stroke={email.isStarred ? 'orange' : 'gray'}
                    fill={email.isStarred ? 'orange' : 'transparent'}
                    className={
                      email.isStarred ? 'text-yellow-500' : 'text-gray-400'
                    }
                  />
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <p className="font-semibold text-gray-900 truncate">
                    {email.subject}
                  </p>
                 
                </div>
                <p className="text-sm text-gray-600 truncate mt-1 sm:mt-0 max-w-120">
                  {email.body}
                </p>
                <div className="flex items-center gap-2 mt-1 sm:hidden">
                  <span className="text-xs text-gray-500">
                    {email.from.split('@')[0]}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">
                    {new Date(email.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 flex-shrink-0 sm:justify-end">
              {email.hasAttachments && <Paperclip color="gray" size={16} />}
              <span className="text-sm text-gray-500 hidden sm:inline">
                {new Date(email.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EmailList
