export default function Head ({children}) {
  return (
    <>
        {children && children}
        <meta
          name="description"
          content="This is the personal portfolio of Whoknows, the web developer. Here you will find a showcase of my standout projects in the field of web development. Take a look at my professional experience and expertise to learn more about how I can help bring your web development projects to life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </>
  )
}
