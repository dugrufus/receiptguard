module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B5FFF',
        accent: '#14B8A6',
        success: '#16A34A',
        warning: '#D97706',
        error: '#DC2626',
        line: '#E5E7EB',
        textStrong: '#0F172A',
        textDefault: '#111827',
        textMuted: '#6B7280',
        surfaceSubtle: '#F8FAFC',
        surfacePage: '#FFFFFF'
      },
      borderRadius: {
        xl: '16px'
      },
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px'
      },
      fontSize: {
        'display-lg': ['28px',{lineHeight:'34px',fontWeight:700}],
        'display-md': ['24px',{lineHeight:'30px',fontWeight:700}],
        'title': ['20px',{lineHeight:'28px',fontWeight:600}],
        'body': ['16px',{lineHeight:'24px',fontWeight:400}],
        'body-strong': ['16px',{lineHeight:'24px',fontWeight:600}],
        'caption': ['14px',{lineHeight:'20px',fontWeight:500}],
        'micro': ['12px',{lineHeight:'16px',fontWeight:500}]
      },
      boxShadow: {
        e1: '0 1px 2px rgba(17,24,39,0.06)',
        e2: '0 4px 12px rgba(17,24,39,0.08)'
      }
    }
  },
  plugins: []
}