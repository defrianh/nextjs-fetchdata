import Link from 'next/link'

const Shortcut = () => {
    return (
        <nav>
            <ul>
                <li><Link href='/fetch/csr/'>CSR</Link></li>
                <li><Link href='/fetch/ssr/'>SSR</Link></li>
                <li><Link href='/fetch/ssg/'>SSG</Link></li>
                <li><Link href='/fetch/isr/'>ISR</Link></li>
            </ul>
            <style jsx>{`
                .navigation {
                    padding:5px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                    overflow: hidden;
                    width: 50%;
                    margin: 0 auto;
                  }
                  
                  li {
                    float: left;
                    padding: 14px 16px;
                    margin-right:10px;
                  }
                  
                  li a {
                    display: block;
                    text-align: center;
                    text-decoration: none;
                  }
            `}</style>
        </nav>
    )
}

export default Shortcut