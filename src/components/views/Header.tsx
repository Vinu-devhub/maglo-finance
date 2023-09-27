import AvatarImg from "@/assets/Avatar-img.png";
import NotificationBell from "../icons/NotificationBell";
import SearchIcon from "../icons/SearchIcon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Select, SelectTrigger, SelectValue } from "../ui/select";

type headerTypes = {
  page: string;
  username: string;
};

const Header = ({ page, username }: headerTypes) => {
  return (
    <div className=" flex justify-between items-center ">
      <h1 className=" capitalize text-2xl text-white font-semibold">
        {page ? page : "Dashboard"}
      </h1>
      <div className=" flex gap-11">
        <div className=" flex items-center gap-11">
          <SearchIcon width={24} height={24} />
          <NotificationBell width={24} height={24} />
        </div>
        <div>
          <Select>
            <SelectTrigger className=" w-fit h-12 px-2 py-4 text-sm font-semibold border-darkColor bg-darkColor2 rounded-3xl text-white flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={AvatarImg}
                  alt="@shadcn"
                  width={36}
                  height={36}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <SelectValue placeholder={username} className=" py-2" />
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;
