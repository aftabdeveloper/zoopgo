import Link from "next/link"
import Image from "next/image"
import {
    InboxOutlined,
    MobileOutlined
} from '@ant-design/icons'

const Layout = ()=>{
    return (
        <>
           <nav className="bg-slate-900 text-white flex justify-between p-3 px-9 items-center">
             <h1 className="capitalize">india's most trusted platform</h1>
             <div className="flex gap-8">
                    <div className="flex items-center gap-1">
                    <Link href="#" legacyBehavior>
                    <InboxOutlined /> 
                    </Link>
                    <Link href="#" legacyBehavior> 
                    <a>Are You a vendor?</a>
                    </Link>
                    </div>
                <Link href="#" legacyBehavior>
                    <a>Advertise</a>
                </Link>
                <Link href="#" legacyBehavior>
                    <a>Login | Signup</a>
                </Link>
             </div>
           </nav>
           <nav className="bg-white shadow-xl p-3 px-9 flex justify-between items-center">
            <Link href="#">
                <Image 
                    src="/images/brand.png"
                    width={120}
                    height={60}
                />
            </Link>
            <div className="flex items-center gap-2">
                <MobileOutlined />
                <p>9971746885</p>    
            </div>
           </nav>
        </>
    )
}

export default Layout