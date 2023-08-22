export async function getServerSideProps(context) {

  const APIURL = process.env.MAIN_API_URL
  const res = await fetch(APIURL)
  if (!res.ok) {
    throw new Error(`Fetch failed with status ${res.status}`);
  }
  const newResponse = await res.json() || null;
  const data = newResponse.data
  
  
  // The next line will only be logged on the server and never on the browser console even if we make 
  // client-side navigation.
  // This confirms that `getServerSideProps` is guaranteed to run on the server and never on the client (or browser).
  return {
    props: {
      data
    }
  }
}