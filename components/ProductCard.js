export default function ProductCard({ comingSoon, title, description }) {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 shadow rounded-lg text-left p-3">

      <div className="flex items-center mb-3">
        <h3 className="text-black dark:text-white text-sm font-medium mr-auto">
          {title}
        </h3>

        {comingSoon &&
          <div className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:text-blue-100 dark:bg-blue-800 ">
            Coming Soon
          </div>
        }
      </div>

      <p className="text-sm">
        {description}
      </p>
    </div>
  )
}
