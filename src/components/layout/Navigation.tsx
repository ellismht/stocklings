import { useNavigate } from '@tanstack/react-router';
import { BottomNavigation, BottomNavigationItem, BottomNavigationItemIcon, BottomNavigationItemLabel, BottomNavigationList } from '../ui/bottom-navigation';
import { PackageCheckIcon, SettingsIcon, ShelvingUnitIcon } from "lucide-react";

const items = [
    { icon: PackageCheckIcon, label: "Stan", value: "/" },
    { icon: ShelvingUnitIcon, label: "Magazyn", value: "/warehouse" },
    { icon: SettingsIcon, label: "Ustawienia", value: "/settings" }
];

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <BottomNavigation
            className="fixed shrink-0"
            defaultValue="/"
        >
            <BottomNavigationList className="bg-navbar">
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