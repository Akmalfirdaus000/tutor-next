export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
     <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
      <p className="mt-4">Loading...</p>
    </div>
    </>
  )
}
