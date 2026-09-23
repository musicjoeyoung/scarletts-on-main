import { useEffect } from 'react'

export default function Posts() {
  useEffect(() => {
    const fallbackWindow = window as Window & {
      FB?: {
        XFBML?: {
          parse?: () => void
        }
      }
    }

    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script')
      script.id = 'facebook-jssdk'
      script.async = true
      script.defer = true
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0'
      document.head.appendChild(script)
      return
    }

    if (fallbackWindow.FB?.XFBML?.parse) {
      fallbackWindow.FB.XFBML.parse()
    }
  }, [])

  return (
    <section className="posts" id="updates">
      <div className="container">
        <div className="posts-header">
          <h2>Updates & News</h2>
          <a
            className="facebook-link"
            href="https://www.facebook.com/profile.php?id=61593592330869"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Facebook
          </a>
        </div>

        <div className="facebook-feed">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=61593592330869"
            data-tabs="timeline"
            data-width="1000"
            data-height="800"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/profile.php?id=61593592330869"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/profile.php?id=61593592330869">
                Scarlett's on Main
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
