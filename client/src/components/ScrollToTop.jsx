import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
    const router = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [router.pathname])
    return null
}

export default ScrollToTop