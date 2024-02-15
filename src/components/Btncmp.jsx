export default function Btncmp(props)
{
    return (
        <div className="border-[1px] border-[]">
        <div className="m-2  ">
            <div className="flex gap-2">
            <input type="checkbox" /> <p>{props.p}</p></div>
            <div className="flex justify-end cursor-pointer">
            <div className="bg-[#4375FB] text-center px-2 w-[100px] flex justify-end ">
                <p className="text-white  p-2">{props.value}</p>
            </div>
            </div>
        </div>
        </div>
    )
}