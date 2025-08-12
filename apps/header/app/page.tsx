import { WeatherHeader } from "@/components/weather-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, MessageCircle, Share2, TrendingUp } from "lucide-react"

export default function HomePage() {
  const featuredArticle = {
    title: "Breaking: Major Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on unprecedented climate action plan with binding commitments for carbon neutrality by 2050. The agreement includes revolutionary funding mechanisms for developing nations.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Climate",
    author: "Sarah Johnson",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    comments: 127,
  }

  const newsArticles = [
    {
      id: 1,
      title: "Tech Giants Announce Joint AI Safety Initiative",
      excerpt:
        "Leading technology companies collaborate on new artificial intelligence safety standards and ethical guidelines.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Technology",
      author: "Michael Chen",
      publishedAt: "4 hours ago",
      readTime: "3 min read",
      comments: 89,
    },
    {
      id: 2,
      title: "Global Markets Rally on Economic Recovery Signs",
      excerpt:
        "Stock markets worldwide show strong gains as economic indicators point to sustained recovery and growth.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Finance",
      author: "Emma Rodriguez",
      publishedAt: "6 hours ago",
      readTime: "4 min read",
      comments: 156,
    },
    {
      id: 3,
      title: "Revolutionary Medical Breakthrough in Cancer Treatment",
      excerpt:
        "New immunotherapy approach shows remarkable success rates in clinical trials for multiple cancer types.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Health",
      author: "Dr. James Wilson",
      publishedAt: "8 hours ago",
      readTime: "6 min read",
      comments: 203,
    },
    {
      id: 4,
      title: "Space Mission Discovers Water on Distant Exoplanet",
      excerpt:
        "NASA's latest space telescope reveals evidence of water vapor in the atmosphere of a potentially habitable world.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Science",
      author: "Lisa Park",
      publishedAt: "12 hours ago",
      readTime: "4 min read",
      comments: 94,
    },
    {
      id: 5,
      title: "Renewable Energy Reaches New Milestone Globally",
      excerpt: "Solar and wind power generation surpasses fossil fuels for the first time in recorded history.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Environment",
      author: "David Kim",
      publishedAt: "1 day ago",
      readTime: "5 min read",
      comments: 178,
    },
    {
      id: 6,
      title: "Olympic Games Preparation Enters Final Phase",
      excerpt:
        "Host city completes major infrastructure projects as athletes from around the world prepare for competition.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Sports",
      author: "Maria Santos",
      publishedAt: "1 day ago",
      readTime: "3 min read",
      comments: 67,
    },
  ]

  const trendingArticles = [
    { title: "Electric Vehicle Sales Surge 300% This Quarter", readTime: "2 min", comments: 45 },
    { title: "New Archaeological Discovery Rewrites Ancient History", readTime: "4 min", comments: 78 },
    { title: "Cryptocurrency Market Shows Signs of Stabilization", readTime: "3 min", comments: 123 },
    { title: "Breakthrough in Quantum Computing Announced", readTime: "5 min", comments: 89 },
    { title: "Global Food Security Initiative Launches", readTime: "4 min", comments: 56 },
  ]

  const categories = [
    { name: "Breaking News", count: 12, color: "bg-red-500" },
    { name: "Technology", count: 28, color: "bg-blue-500" },
    { name: "Climate", count: 15, color: "bg-green-500" },
    { name: "Finance", count: 22, color: "bg-yellow-500" },
    { name: "Health", count: 18, color: "bg-purple-500" },
    { name: "Science", count: 14, color: "bg-indigo-500" },
    { name: "Sports", count: 31, color: "bg-orange-500" },
    { name: "Politics", count: 19, color: "bg-gray-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <WeatherHeader />

      {/* Current Weather Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              {/* Changed text to white and condition to Sunny */}
              <div className="text-white/90 text-xl mb-2">New York, NY</div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-8xl">☀️</span>
                <div className="text-white text-9xl font-bold">72°</div>
              </div>
              <div className="text-white text-2xl font-medium">Sunny</div>
              <div className="text-white/70 text-sm mt-2">Last updated 2 minutes ago</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-white/70 text-sm">Feels Like</div>
                <div className="text-white text-2xl font-semibold">75°</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-sm">Humidity</div>
                <div className="text-white text-2xl font-semibold">68%</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-sm">Wind Speed</div>
                <div className="text-white text-2xl font-semibold">12 mph</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-sm">Pressure</div>
                <div className="text-white text-2xl font-semibold">30.12"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced News Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Featured Article */}
        <section className="mb-12">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-0 shadow-lg">
                    {featuredArticle.category}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg">
                    Featured
                  </Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {featuredArticle.title}
                </h1>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.publishedAt}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {featuredArticle.comments} comments
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Read Full Article
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-gray-50 transition-colors duration-300 bg-transparent"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-3">
            {/* Enhanced Categories */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Browse by Category
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="outline"
                    className="h-auto p-4 flex-col items-start bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <div className={`w-3 h-3 rounded-full ${category.color} shadow-lg`} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{category.count} articles</span>
                  </Button>
                ))}
              </div>
            </section>

            {/* Enhanced Latest News Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Latest News
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {newsArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 shadow-md">
                          {article.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight hover:text-blue-600 cursor-pointer transition-colors duration-300">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.publishedAt}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{article.readTime}</span>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            {article.comments}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {/* Enhanced Trending Articles */}
            <Card className="mb-6 border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingArticles.map((article, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-0 pb-3 last:pb-0 hover:bg-gray-50/50 p-2 rounded-lg transition-colors duration-300"
                  >
                    <h4 className="font-medium text-sm leading-tight mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{article.readTime}</span>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {article.comments}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Enhanced Newsletter Signup */}
            <Card className="mb-6 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Get the latest news delivered straight to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    size="sm"
                  >
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Quick Stats */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Today's Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50/50 transition-colors duration-300">
                  <span className="text-sm text-gray-600">Articles Published</span>
                  <span className="font-bold text-blue-600">47</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50/50 transition-colors duration-300">
                  <span className="text-sm text-gray-600">Total Readers</span>
                  <span className="font-bold text-emerald-600">2.4M</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50/50 transition-colors duration-300">
                  <span className="text-sm text-gray-600">Comments</span>
                  <span className="font-bold text-purple-600">1,847</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50/50 transition-colors duration-300">
                  <span className="text-sm text-gray-600">Shares</span>
                  <span className="font-bold text-orange-600">892</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
