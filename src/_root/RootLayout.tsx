import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'

import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <Topbar />
            <LeftSidebar />
            <section>
                <Outlet />
            </section>

            <Bottombar />
        </div>
    )
}

export default RootLayout