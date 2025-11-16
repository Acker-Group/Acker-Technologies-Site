import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
// @ts-ignore: side-effect import of global CSS (Next.js global stylesheet)
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acker Technologies: Empowering African Developers',
  description: 'Acker Technologies is the technology and innovation subsidiary of Acker Group SA (Pty Ltd). We empower small developers and businesses with tools, services, and products that simplify modern development. Based in Centurion, Gauteng, South Africa.',
  keywords: 'Acker Technologies, developer tools, SaaS, African developers, South Africa, Acker Group SA, freemium developer platforms, indie developers, small tech startups',
  authors: [{ name: 'Acker Technologies' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Acker Technologies: Build. Grow. Connect.',
    description: 'Empowering small developers and businesses with tools that simplify modern development.',
    url: 'https://acker-technologies.com',
    siteName: 'Acker Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acker Technologies: Build. Grow. Connect.',
    description: 'Empowering African developers with world-class tools and platforms.',
    creator: '@ackertechnologies',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Light / Dark mode favicons */}
        <link rel="icon" href="/Acker-Technologies-Logo-Dark.png" type="image/png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/Acker-Technologies-Logo-Light.png" type="image/png" media="(prefers-color-scheme: dark)" />
        {/* Fallback for browsers that don't support media on icons */}
        <link rel="icon" href="/Acker-Technologies-Logo-Dark.png" />
        {/* Inline script for dynamic favicon switching */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try{
              var light = '/Acker-Technologies-Logo-Dark.png';
              var dark = '/Acker-Technologies-Logo-Light.png';

              function removeUnmanagedIcons(){
                Array.from(document.querySelectorAll('link[rel~="icon"]')).forEach(function(n){
                  if(!n.hasAttribute('data-theme')){
                    n.parentNode && n.parentNode.removeChild(n);
                  }
                });
              }

              function setIcon(href){
                var el = document.querySelector('link[rel="icon"][data-theme="auto"]');
                if(!el){
                  el = document.createElement('link');
                  el.setAttribute('rel','icon');
                  el.setAttribute('data-theme','auto');
                  document.head.appendChild(el);
                }
                if(el.getAttribute('href') !== href){ el.setAttribute('href', href); }
              }

              var mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
              function update(){
                var useDark = mq ? mq.matches : false;
                setIcon(useDark ? dark : light);
              }

              removeUnmanagedIcons();
              update();

              var head = document.head || document.getElementsByTagName('head')[0];
              if(head && window.MutationObserver){
                var mo = new MutationObserver(function(mutations){
                  mutations.forEach(function(m){
                    m.addedNodes && m.addedNodes.forEach(function(node){
                      if(node && node.nodeType === 1 && node.tagName.toLowerCase() === 'link'){
                        var rel = (node.getAttribute('rel') || '').toLowerCase();
                        if(rel.indexOf('icon') !== -1 && !node.hasAttribute('data-theme')){
                          node.parentNode && node.parentNode.removeChild(node);
                        }
                      }
                    });
                    if(m.type === 'attributes' && m.target && m.target.tagName && m.target.tagName.toLowerCase() === 'link'){
                      var t = m.target;
                      var relt = (t.getAttribute('rel') || '').toLowerCase();
                      if(relt.indexOf('icon') !== -1 && !t.hasAttribute('data-theme')){
                        t.parentNode && t.parentNode.removeChild(t);
                      }
                    }
                  });
                  update();
                });
                mo.observe(head, { childList: true, subtree: true, attributes: true, attributeFilter: ['rel','href'] });
              }

              if(mq && mq.addEventListener) mq.addEventListener('change', update);
              else if(mq && mq.addListener) mq.addListener(update);

              var retries = 0;
              var maxRetries = 20;
              var interval = setInterval(function(){
                removeUnmanagedIcons();
                update();
                retries++;
                if(retries > maxRetries) clearInterval(interval);
              }, 100);
            }catch(e){ console.error('favicon switch error', e); }
          })();
        ` }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
