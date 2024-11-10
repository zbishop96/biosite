import WelcomeCard from "./WelcomeCard";

export default function Page({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}) {
  if (!searchParams['code']) {
    return <WelcomeCard />
  } else {
    return <div>Authorization code retrieved.</div>
  }
}