import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="preview-hero">
        <div>
          <p className="preview-pill">College hoops first / NBA second</p>
          <h1>Smarter basketball media from the paint out.</h1>
          <p className="preview-lede">
            Paint Touch Media covers college basketball analysis, rankings, draft boards, opinion, news,
            and the NBA ideas that shape the sport.
          </p>
          <div className="preview-actions">
            <Link className="preview-button preview-button-primary" href="/articles">
              Read Latest
            </Link>
            <Link className="preview-button preview-button-secondary" href="/rankings">
              View Rankings
            </Link>
          </div>
        </div>
        <div className="preview-visual" aria-label="Abstract basketball media artwork">
          <div className="preview-visual-content">
            <span className="preview-tag">Featured</span>
            <div>
              <div className="preview-ptm">PTM</div>
              <p className="preview-lede">Top 25 pressure points that will decide the college season.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="preview-section" id="latest">
        <div className="preview-section-title">
          <div>
            <p className="preview-pill">Latest Articles</p>
            <h2>Fresh reads from the floor.</h2>
          </div>
          <p>Analysis, arguments, and early signals worth caring about. Built to become a full article archive in Next.js.</p>
        </div>
        <div className="preview-grid">
          <article className="preview-article">
            <div className="preview-card-visual preview-orange" />
            <div className="preview-article-body">
              <span className="preview-tag">Draft</span>
              <h3>Five Freshman Guards Already Changing the Draft Board</h3>
              <p className="preview-meta">Maya Ellis / May 25, 2026 / 5 min read</p>
            </div>
          </article>
          <article className="preview-article">
            <div className="preview-card-visual preview-red" />
            <div className="preview-article-body">
              <span className="preview-tag">NBA</span>
              <h3>What College Coaches Should Steal From the NBA Playoffs</h3>
              <p className="preview-meta">Jon Reed / May 22, 2026 / 6 min read</p>
            </div>
          </article>
          <article className="preview-article">
            <div className="preview-card-visual preview-green" />
            <div className="preview-article-body">
              <span className="preview-tag">Rankings</span>
              <h3>The Mid-Major Watch List Built for Upset Hunters</h3>
              <p className="preview-meta">Paint Touch Staff / May 20, 2026 / 4 min read</p>
            </div>
          </article>
        </div>
      </section>

      <section className="preview-two-col" id="trending">
        <div className="preview-trending">
          <p className="preview-pill">Trending</p>
          <div className="preview-trend">
            <strong>1</strong>
            <div>
              <span className="preview-tag">College Basketball</span>
              <h3>The Top 25 Pressure Points That Will Decide the College Season</h3>
            </div>
          </div>
          <div className="preview-trend">
            <strong>2</strong>
            <div>
              <span className="preview-tag">Draft</span>
              <h3>Five Freshman Guards Already Changing the Draft Board</h3>
            </div>
          </div>
          <div className="preview-trend">
            <strong>3</strong>
            <div>
              <span className="preview-tag">Opinion</span>
              <h3>Why Paint Touches Still Tell the Truth</h3>
            </div>
          </div>
        </div>

        <section className="preview-ranking" id="rankings">
          <p className="preview-pill">Rankings</p>
          <h2>Top 5 Teams Right Now</h2>
          <div className="preview-rank-row">
            <span className="preview-rank-num">1</span>
            <span className="preview-move">-</span>
            <div>
              <strong>Houston</strong>
              <br />
              Still the sport&apos;s best pressure machine.
            </div>
          </div>
          <div className="preview-rank-row">
            <span className="preview-rank-num">2</span>
            <span className="preview-move">+</span>
            <div>
              <strong>Duke</strong>
              <br />
              More creation, better spacing, scary ceiling.
            </div>
          </div>
          <div className="preview-rank-row">
            <span className="preview-rank-num">3</span>
            <span className="preview-move">-</span>
            <div>
              <strong>Kansas</strong>
              <br />
              Frontcourt answers will decide the top seed case.
            </div>
          </div>
          <div className="preview-rank-row">
            <span className="preview-rank-num">4</span>
            <span className="preview-move">NEW</span>
            <div>
              <strong>UConn</strong>
              <br />
              Different roster, same ruthlessly clean structure.
            </div>
          </div>
        </section>
      </section>

      <section className="preview-newsletter" id="newsletter">
        <p className="preview-pill">Paint Touch Dispatch</p>
        <h2>One smart basketball email. No empty calories.</h2>
        <p className="preview-lede">Weekly college hoops notes, rankings movement, draft opinions, and NBA ideas worth stealing.</p>
        <form>
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@email.com" />
          <button type="submit">Join Free</button>
        </form>
      </section>
    </main>
  );
}
