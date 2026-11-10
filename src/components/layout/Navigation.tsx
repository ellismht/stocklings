import { useNavigate } from '@tanstack/react-router';
import { BottomNavigation, BottomNavigationItem, BottomNavigationItemIcon, BottomNavigationItemLabel, BottomNavigationList } from '../ui/bottom-navigation';
import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";

const items = [
    { icon: HomeIcon, label: "Home", value: "/" },
    { icon: SearchIcon, label: "Search", value: "/search" },
    { icon: BellIcon, label: "News", value: "/news" },
    { icon: UserIcon, label: "Profile", value: "/profile" },
];

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <BottomNavigation
            className="fixed"
            defaultValue="/"
        >
            <BottomNavigationList className="bg-background">
                {items.map((item) => (
                    <BottomNavigationItem key={item.value} value={item.value} onClick={() => navigate({ to: `/${item.value}` })}>
                        <BottomNavigationItemIcon>
                            <item.icon />
                        </BottomNavigationItemIcon>
                        <BottomNavigationItemLabel>{item.label}</BottomNavigationItemLabel>
                    </BottomNavigationItem>
                ))}
            </BottomNavigationList>
        </BottomNavigation>
    )
}

export default Navigation;