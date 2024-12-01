import { FC, ReactElement } from "react";
import Header from "./Header";
import Profile from "./Profile";

interface PageContainerProps extends React.PropsWithChildren {
  children: ReactElement;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="w-full h-full rounded-lg bg-white pb-1">
        <Header />
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20 pb-5 px-2">
          <Profile isLeft={true} />
          <div className="lg:col-span-3 relative px-3 rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
