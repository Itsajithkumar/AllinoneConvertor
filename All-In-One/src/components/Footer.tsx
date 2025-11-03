import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: '60px', padding: '26px 0', color: '#667085', fontSize: '13px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>&copy; {new Date().getFullYear()} All-in-One — All rights reserved</div>
        <div>Built for demo. Follow SEO checklist before publishing.</div>
      </div>
    </footer>
  );
};

export default Footer;