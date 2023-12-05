import Link from "next/link"
import Image from "next/image"
import {Row,Col} from "antd"
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
           <section className="p-60">

           </section>
           <footer className="bg-blue-600 text-white p-10">
           <Row>
            <Col span={6} className="p-2 px-3"><div class="border-b-2 pb-4 font-semibold">KNOW US</div>
                <p>About us</p>
                <p>Contact us</p>
                <p>Blog</p>
            </Col>
            <Col span={12} className="p-2 px-3" ><div class="border-b-2 pb-4 font-semibold">OTHER LINKS</div></Col>
            <Col span={6} className="p-2 px-3"><div class="border-b-2 pb-4 font-semibold">HELP US SPREAD THE WORD</div></Col>
            </Row>
            <Row>
                <Col span={24} className="p-2 px-3">
                <div class="border-t-2 py-3">
                    Disclaimer - - You are kindly advised to check the genuineness of all companies listed above on your own behalf prior to signing a contract with them. We are in no way responsible for any loss. Read Complete Disclaimer
                </div>
                </Col>
            </Row>
           </footer>
        </>
    )
}

export default Layout