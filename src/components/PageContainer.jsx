function PageContainer({ children, className = '' }) {
  return (
    <div
      className={`min-h-screen w-full ${className}`}
      style={{ background: 'var(--page-gradient)' }}
    >
      {children}
    </div>
  )
}

export default PageContainer
