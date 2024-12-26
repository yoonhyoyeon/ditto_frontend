import Navigation from '@/component/Navigation';

export default function ServiceLayout({ children }) {
  return (
    <>
      <Navigation />
      <div className="global_container">
        {children}
      </div>
      
    </>
  );
}
