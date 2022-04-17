import Navbar from './components/Navbar'
// Pages
import Home from './pages/Home/main'
// Blog
// import Blog from './pages/Blog/main'
import BlogAdd from './pages/Blog/add'
// Topic
import Topic from './pages/Topic/main'
import TopicAdd from './pages/Topic/add'
import TopicDetail from './pages/Topic/detail'

import { Routes, Route} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
      <div className='w-1/2 mx-auto md:w-full'>
      <Navbar />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/topic" element={<Topic/> } />
            <Route path="/topic/add" element={<TopicAdd/> } />
            <Route path="/topic/detail/:id" element={<TopicDetail/> } />
            {/* <Route path="/blog" element={<Blog/> } /> */}
            {/* <Route path="/blog/add" element={<BlogAdd/> } /> */}
            <Route path="/blog/add" element={<BlogAdd/> } />
          </Routes>
        </QueryClientProvider>
      </div>
  )
}

export default App
