import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { ethers } from 'ethers';
import {chainID, gameABI, gameContract} from "../../chainUtils/constants";

export default function VaultComponet(props) {


    const getGameContract = async () => {
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signertemp = temporalProvider.getSigner();
        return new ethers.Contract(gameContract, gameABI, signertemp);
    }




        //getTimeleft
        const Withdraw = async () => {

                const Contract = await getGameContract();
                const withdraw = await Contract.withdraw();
                await withdraw.wait();

          }

    return (
        <div className="bg-[#212529] w-[46vw] sm:w-[95vw] font-fomofont p-4 rounded-b-2xl rounded-r-2xl">
            <h3 className="text-[1.75rem] font-fomofont font-normal mb-4">Vault</h3>


            <div className="bg-[#181c1d] p-4 font-fomofont rounded-md">

                <div className="flex justify-between">
                    <h3 className="flex items-center text-2xl font-light font-fomofont sm:text-[1.3rem] " >At Exit(estimated)</h3>
                    <div className="flex flex-col justify-between items-center sm:text-[1.4rem]">
                        <h2 className="flex items-center text-[1.75rem] font-normal font-fomofont sm:text-[1.4rem]">
                        {props.signerAddress ?
                             <>
                              {props.playerRoundEth}
                             </>
                             :
                             <>
                              0.0000 ETH
                             </>
                        }
                        </h2>
                    </div>
                </div>
                 <div className="flex justify-between">
                    <h3 className="flex items-center text-2xl font-light font-fomofont sm:text-[1.3rem] " >Exit Scammed</h3>
                    <div className="flex flex-col justify-between items-center sm:text-[1.4rem]">
                        <h2 className="flex items-center text-[1.75rem] font-normal font-fomofont sm:text-[1.4rem]">
                        {props.signerAddress ?
                             <>
                              {props.playerWinnings}
                             </>
                             :
                             <>
                              0.0000 ETH
                             </>
                          }
                        </h2>
                    </div>
                </div>
                 <div className="flex justify-between">
                    <h3 className="flex items-center text-2xl font-light font-fomofont sm:text-[1.3rem] " >Bad Advice</h3>
                    <div className="flex flex-col justify-between items-center sm:text-[1.4rem]">
                        <h2 className="flex items-center text-[1.75rem] font-normal font-fomofont sm:text-[1.4rem]">0.0000 ETH</h2>
                    </div>
                </div>
                 <div className="flex justify-between mt-5">
                    <h3 className="flex items-center text-2xl font-light font-fomofont sm:text-[1.3rem] " >Total Gains</h3>
                    <div className="flex flex-col justify-between items-center sm:text-[1.4rem]">
                        <h2 className="flex items-center text-[1.75rem] font-normal font-fomofont sm:text-[1.4rem]" style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }}>
                        {props.signerAddress ?
                             <>
                              {props.playerWinnings}
                             </>
                             :
                             <>
                              0.0000 ETH
                             </>
                            }
                        </h2>
                    </div>
                </div>
                <div className="flex justify-end">
                    <span className="font-fomofont font-light mt-1 my-2">0 USD</span>
                </div>
                <button className="w-full flex items-center justify-center border hover:text-white hover:bg-[#f000f0] rounded-md py-2 border-[#f000f0] opacity-50" onClick={Withdraw} ><FaHandHoldingHeart className='mr-2'/>Withdraw</button>
            </div>
        </div>
    )
}
