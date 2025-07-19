"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Globe,
  Moon,
  Sun,
  Laptop,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useTheme } from "../../context/ThemeContext";

export default function Header({ currentPage = "" }) {
  const [language, setLanguage] = useState("vi");
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("educore-language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
    localStorage.setItem("educore-language", newLang);

    document.documentElement.classList.add("language-transition");
    setTimeout(() => {
      document.documentElement.classList.remove("language-transition");
    }, 500);
  };

  const navItems = [
    { path: "/", label: language === "vi" ? "Trang chủ" : "Home", key: "home" },
    {
      path: "/features",
      label: language === "vi" ? "Blog" : "Blog",
      key: "features",
    },
    {
      path: "/pricing",
      label: language === "vi" ? "Bảng giá" : "Pricing",
      key: "pricing",
    },
    {
      path: "/about",
      label: language === "vi" ? "Giới thiệu" : "About",
      key: "about",
    },
    {
      path: "/contact",
      label: language === "vi" ? "Liên hệ" : "Contact",
      key: "contact",
    },
  ];

  const langLabels = {
    vi: {
      label: "Tiếng Việt",
      login: "Đăng nhập",
      register: "Đăng ký",
      menu: "Menu",
    },
    en: {
      label: "English",
      login: "Login",
      register: "Register",
      menu: "Menu",
    },
  };

  const themeOptions = [
    {
      id: "light",
      name: language === "vi" ? "Chế độ sáng" : "Light mode",
      icon: Sun,
      color: "text-amber-500",
    },
    {
      id: "dark",
      name: language === "vi" ? "Chế độ tối" : "Dark mode",
      icon: Moon,
      color: "text-blue-400",
    },
    {
      id: "system",
      name: language === "vi" ? "Theo hệ thống" : "System",
      icon: Laptop,
      color: "text-emerald-500",
    },
  ];

  const currentTheme = themeOptions.find((option) => option.id === theme);

  return (
    <>
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section - Enhanced */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute -inset-1 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-900 dark:group-hover:from-blue-300 dark:group-hover:to-blue-200 transition-all duration-300">
                    EduCore
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                    {language === "vi"
                      ? "Nền tảng học tập"
                      : "Learning Platform"}
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group ${
                    currentPage === item.key
                      ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/60"
                  }`}>
                  {item.label}
                  {currentPage !== item.key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Language Switcher - Improved */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium rounded-xl border border-gray-200/60 dark:border-gray-700/60 px-3 py-2 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 backdrop-blur-sm"
                  onClick={toggleLanguage}>
                  <Globe className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
                  <span className="text-sm">{langLabels[language].label}</span>
                  <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] px-1.5 py-0.5 font-bold shadow-sm animate-pulse">
                    BETA
                  </Badge>
                </Button>
              </div>

              {/* Theme Switcher - Enhanced */}
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center justify-between text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl border border-gray-200/60 dark:border-gray-700/60 px-3 py-2 min-w-[120px] shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 backdrop-blur-sm"
                  onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}>
                  {currentTheme && (
                    <>
                      <div className="flex items-center">
                        <currentTheme.icon
                          className={`h-4 w-4 mr-2 ${currentTheme.color} transition-all duration-300`}
                        />
                        <span className="text-sm">{currentTheme.name}</span>
                      </div>
                      <ChevronDown
                        className={`h-3.5 w-3.5 ml-2 transition-transform duration-300 ${
                          themeDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </>
                  )}
                </Button>

                {themeDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-52 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 z-50 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-200">
                    <div className="py-2">
                      {themeOptions.map((option) => (
                        <button
                          key={option.id}
                          className={`flex items-center w-full px-4 py-3 text-sm transition-all duration-200 ${
                            theme === option.id
                              ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 font-medium"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/50"
                          }`}
                          onClick={() => {
                            toggleTheme(option.id);
                            setThemeDropdownOpen(false);
                          }}>
                          <option.icon
                            className={`h-4 w-4 mr-3 ${
                              theme === option.id
                                ? option.color
                                : "text-gray-500 dark:text-gray-400"
                            } transition-colors duration-200`}
                          />
                          {option.name}
                          {theme === option.id && (
                            <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Auth Buttons - Enhanced */}
              <div className="flex items-center space-x-2 pl-3 border-l border-gray-200/60 dark:border-gray-700/60">
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-xl font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                  {langLabels[language].login}
                </Link>
                <Link
                  to="/register"
                  className="border border-blue-600/60 dark:border-blue-500/60 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 hover:border-blue-600 dark:hover:border-blue-400">
                  {langLabels[language].register}
                </Link>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="relative p-2 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm"
                onClick={toggleLanguage}>
                <Globe className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[8px] px-1 font-bold">
                  β
                </Badge>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm"
                onClick={() => {
                  const nextTheme =
                    theme === "light"
                      ? "dark"
                      : theme === "dark"
                      ? "system"
                      : "light";
                  toggleTheme(nextTheme);
                }}>
                {currentTheme && <currentTheme.icon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                className="p-2 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl animate-in slide-in-from-top-5 duration-300">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === item.key
                        ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/60"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60 space-y-3">
                <Link
                  to="/login"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl font-medium text-center shadow-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  {langLabels[language].login}
                </Link>
                <Link
                  to="/register"
                  className="block w-full border border-blue-600/60 text-blue-600 dark:text-blue-400 px-4 py-3 rounded-xl font-medium text-center transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  {langLabels[language].register}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
