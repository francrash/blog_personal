import {connect} from 'react-redux'

function Header(){
  
    return(
        
    <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto lg:mx-12max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12 ">
            <div>
              
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-4  sm:text-7xl">

                  About Us
                
                </h1>
                <p className="mt-6 text-2xl leading-10 text-black max-w-5xl ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
               
               
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