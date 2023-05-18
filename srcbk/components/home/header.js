import {connect} from 'react-redux'
import { Typewriter } from 'react-simple-typewriter'
import {Link} from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';

function Header(){
  
    return(
        
    <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12 ">
            <div>
              
              <div>
                <h1 className="text-4xl font-bold tracking-tight pb-16  sm:text-7xl">

                    Agency for <span> </span>

                    <div className="inline-block" style={{ color: '#ff561e' }}>   
                      <Typewriter     
                                words={['Dreamers', 'Creators', 'You!']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={120}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                
                                //onType={handleType}
                                //flex gap-8 items-center justify-left py-12

                                //mt-16 text-2xl  max-w-3xl leading-8 text-black
                            />
                    </div>
                
                </h1>
                
                
                <ul className='flex gap-8 items-center justify-left py-12'>    
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2  border-transparent hover:border-orange-button'> 
                        <Link to='/servcios/algo' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                            Desarrollo Web
                        </Link>        
                    </li>
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'> 
                        <Link to='/servcios/algo' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                            Apps
                        </Link>        
                    </li>
                    <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'> 
                        <Link to='/servcios/algo' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                            Video Juegos
                        </Link>        
                    </li>
                    <li className='inline-flex  transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'> 
                        <Link to='/servcios/algo' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                            Marketing
                        </Link>        
                    </li>
                    <li className='inline-flex  transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'> 
                        <Link to='/servcios/algo' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'>
                            Consultorias
                        </Link>        
                    </li>
                  
                </ul>
               
               
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
            </div>
            </div>
          </div>
        </div>
      </main>)

}

const mapStateToProp = state=>({

})

export default connect(mapStateToProp,{

}) (Header)

