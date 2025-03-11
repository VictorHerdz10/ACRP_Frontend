export default function ErrorMessage ({children} : {children : React.ReactNode }){
    return(
        <span className=" text-red-500 font-bold m-2 ">{children}</span>
    )

}