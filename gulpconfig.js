rsync: {
  src:  'app/**',
  options: {
    destination: '~/public_html/trees',
    root: app,
    hostname: 'avowkind.net',
    username: 'avowkind',
    incremental: true,
    progress: true,
    relative: true,
    emptyDirectories: true,
    recursive: true,
    clean: true,
    exclude: ['.DS_Store'],
    include: []
  }
}
