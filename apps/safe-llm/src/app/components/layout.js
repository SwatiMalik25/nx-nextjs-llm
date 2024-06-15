export default function Layout({ children }) {
    return (
      <div>
        <header>
          {/* Navigation links will go here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    );
  }