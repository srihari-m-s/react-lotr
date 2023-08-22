import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'
import Selection from './components/Selection'

function App() {
  
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <main className='bg-image'>
        <div className='container flex-col'>

          <div className="welcome">
            <h1>welcome to lotr info</h1>
          </div>
          
          <Selection />

        </div>
      </main>
      </QueryClientProvider>
    </>
  )
}

export default App
