import Link from "next/link";

export function SiteNav() {
  return (
    <header className="preview-nav">
      <Link className="preview-logo" href="/" aria-label="Paint Touch Media home">
        <span className="preview-mark">PT</span>
        <span>
          Paint Touch
          <br />
          Media
        </span>
      </Link>
      <nav className="preview-nav-links" aria-label="Preview navigation">
        <Link href="/#latest">Latest</Link>
        <Link href="/#trending">Trending</Link>
        <Link href="/#rankings">Rankings</Link>
        <Link href="/#newsletter">Newsletter</Link>
      </nav>
      <Link className="preview-tip-button" href="/contact">
        Submit Tips
      </Link>
    </header>
  );
}
