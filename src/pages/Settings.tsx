import EditPencilIcon from "@/components/icons/EditPencilIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarDays, Eye, Lock, Mail } from "lucide-react";

const Settings = () => {
  return (
    <Card className=" bg-darkColor rounded-lg border-darkColor2 py-10 pr-24 pl-10 mr-36">
      <CardHeader className=" p-0 pb-10">
        <CardTitle className=" text-xl font-semibold text-white ">
          Account Information
        </CardTitle>
        <CardDescription className=" text-sm font-normal text-secondColor">
          Update your account information
        </CardDescription>
      </CardHeader>
      <CardContent className=" p-0">
        <CardTitle className=" text-white flex justify-between pb-8">
          <span className=" text-lg font-semibold">Personal Information</span>
          <Button className=" p-0 h-5 text-lg font-semibold bg-transparent hover:bg-transparent border-none text-accentColor gap-2">
            <EditPencilIcon width={20} height={20} />
            <span>Edit</span>
          </Button>
        </CardTitle>
        <div className=" text-white flex flex-col gap-10 justify-center ">
          <div className=" flex  gap-10">
            <div className=" flex-1 flex flex-col gap-2">
              <label>First Name</label>
              <Input
                className=" h-11 px-6 bg-transparent rounded-lg placeholder:text-secondColor border-darkColor2 focus-visible:ring-offset-1"
                placeholder="Enter First Name"
              />
            </div>
            <div className=" flex-1 flex flex-col gap-2">
              <label>Last Name</label>
              <Input
                className=" h-11  px-6 bg-transparent rounded-lg placeholder:text-secondColor border-darkColor2 focus-visible:ring-offset-1"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className=" flex  gap-10">
            <div className=" flex-1 flex flex-col gap-2">
              <label>Date of Birth</label>
              <div className=" relative">
                <Input
                  className=" h-11  px-6 bg-transparent rounded-lg placeholder:text-secondColor border-darkColor2 focus-visible:ring-offset-1"
                  placeholder="Select Date"
                />
                <CalendarDays
                  className=" absolute right-4 top-3 text-secondColor"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className=" flex-1 flex flex-col gap-2">
              <label>Mobile Number</label>
              <Input
                type="tel"
                className=" h-11 px-6 bg-transparent rounded-lg placeholder:text-secondColor border-darkColor2 focus-visible:ring-offset-1"
                placeholder="+123 456 789"
              />
            </div>
          </div>
          <div className=" flex  gap-10">
            <div className=" flex-1 flex flex-col gap-2">
              <label>Email</label>
              <div className=" relative">
                <Mail
                  className=" absolute left-6 top-2.5 text-secondColor "
                  width={20}
                  height={20}
                />
                <Input
                  type="email"
                  className=" h-11  px-6 pl-16 bg-transparent rounded-lg placeholder:text-secondColor border-darkColor2 focus-visible:ring-offset-1"
                  placeholder="hellouihut@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className=" flex  gap-10">
            <div className=" flex-1 flex flex-col gap-2">
              <label>Password</label>
              <div className="relative">
                <Lock
                  className=" absolute top-3 text-secondColor left-4"
                  width={20}
                  height={20}
                />
                <Input
                  className=" h-11 px-6 pl-16 bg-transparent rounded-lg placeholder:text-secondColor border-darkColor2 focus-visible:ring-offset-1"
                  placeholder="Enter Password"
                />
                <Eye
                  className=" absolute top-3 text-secondColor right-4"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className=" flex-1 flex flex-col gap-2">
              <label>Confirm Password</label>
              <div className="relative">
                <Lock
                  className=" absolute top-3 text-secondColor left-4"
                  width={20}
                  height={20}
                />
                <Input
                  className=" h-11 px-6 pl-16 bg-transparent rounded-lg placeholder:text-secondColor border-darkColor2 focus-visible:ring-offset-1"
                  placeholder="Confirm Password"
                />
                <Eye
                  className=" absolute top-3 text-secondColor right-4"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Settings;
