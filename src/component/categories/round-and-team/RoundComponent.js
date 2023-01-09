import React, {useState, useEffect} from 'react'
import { FaKey } from 'react-icons/fa';
import Clock from '../../utils/Clock';

export default function RoundComponent(props) {
   
    const [bnbPrice, setBNBPrice] = useState(0);


    const getapiatabnb = async() => {
        const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD");
        var data = await response.json();
        setBNBPrice(data.USD);
        }



        useEffect(() => {
            getapiatabnb();
          }, [])

    return (
            <div className="bg-[#212529] font-fomofont w-[48vw] sm:w-[94vw]  p-5 rounded-b-2xl rounded-r-2xl">
                <div>Round {props.roundInfo}</div>
                <div className="w-full flex items-center">
                   <h3 className="sm:text-[1.3rem] text-3xl font-fomofont font-medium my-2 s" style={{width: '61%'}}>
                    Contract will drain in
                    </h3> 
                     {props.signerAddress ?
                       <Clock 
                        time={props.time} 
                        signerAddress={props.signerAddress}
                        />
                        :
                        <h3 className="sm:text-[1.3rem] text-3xl font-fomofont font-medium my-2 s" >loading....</h3>
                      }

                </div>
                {!props.signerAddress && 
                  <span className="text-xl font-medium font-fomofont">Not connected...</span>
                }
                <div className="relative bg-black h-1  my-2 w-[46vw] sm:w-[85vw] sm:mb-4 mx- rounded-2xl">
                    <div className="abosulte bg-[#f000f0] w-[45vw] sm:w-[70vw]  h-1 rounded-2xl"></div>
                </div>

                <div className="bg-[#181c1d] p-4 font-fomofont rounded-md">
                    <div className="flex justify-between ">
                        <h3 className="sm:text-[1.3rem] text-2xl">Active Pot</h3>
                        <span className="text-xl">
                            {props.signerAddress ?
                             <>
                              {props.currentPot}
                             </>
                             :
                             "loading..."
                            }
                        </span>
                    </div>
                    <div className="flex justify-between my-4">
                        <h3 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont">Your Keys</h3>
                        <div className="flex flex-col justify-between items-center">
                            <span className="font-light text-base">
                                { props.signerAddress ?
                                   bnbPrice * props.currentPot
                                   :
                                   "0"
                                 } USD
                            </span>
                            <h2 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont">
                            {props.signerAddress ?
                             <>
                              {props.playerKeys}
                             </>
                             :
                             <>
                             0.00 <FaKey className="ml-2 text-3xl" />
                             </>
                            }
                            </h2>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont" >Your Earnings</h3>
                        <div className="flex flex-col justify-between items-center">
                            <span className="font-light">
                                Total 
                                
                                { props.signerAddress ?
                                   props.playerKeys
                                   :
                                   "0"
                                  } 
                                Keys
                            </span>
                            <h2 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont">
                            {props.signerAddress ?
                             <>
                              {props.playerWinnings}
                             </>
                             :
                             <>
                                0.0000  <img src="/images/bnbiconhq.png" className="h-8 ml-2" alt="" />
                             </>
                            }
                            </h2>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <span className="font-fomofont font-light mt-1">
                        { props.signerAddress ?
                                   bnbPrice * props.playerWinnings
                                   :
                                   "0"
                           } USD
                        </span>
                    </div>
                </div>
            </div>
    )
}
