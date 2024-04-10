import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from '@/components';

function HomeLayout() {
  const navigation = useNavigation();
  // const isPageLoading = navigation.state === 'loading';
  const isPageLoading = true;
  return (
    <div>
      <Header />
      <Navbar />

      <div className='align-element py-20'>
        {isPageLoading ? <Loading />: <Outlet />}
      </div>
    </div>
  )
}

export default HomeLayout