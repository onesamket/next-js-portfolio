// app/components/ThemeSwitcher.tsx
"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
"use client "
export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)

    }, [])


    if (!mounted) return null
    const toggleTheme = () => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme('dark');
    }
    return (
        <div>
            <Switch
                defaultSelected
                size="sm"
                color="default"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <MoonIcon className={className} />
                    ) : (
                        <SunIcon className={className} />
                    )
                }
                onClick={toggleTheme}
            >
            </Switch>
        </div>
    )
};