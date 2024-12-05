interface MenuItems {
  id: string;
  label: string;
  icons: {
    selected: string;
    notSelected: string;
  };
}

const menuItems: MenuItems[] = [
  {
    id: "",
    label: "Home",
    icons: {
      selected: "/src/assets/icons/Home-Selected.svg",
      notSelected: "/src/assets/icons/Home-NotSelected.svg",
    },
  },
  {
    id: "list-of-todos",
    label: "Lists of todos",
    icons: {
      selected: "/src/assets/icons/List-Selected.svg",
      notSelected: "/src/assets/icons/List-NotSelected.svg",
    },
  },
  {
    id: "pending-todos",
    label: "Pending todos",
    icons: {
      selected: "/src/assets/icons/Pending-Selected.svg",
      notSelected: "/src/assets/icons/Pending-NotSelected.svg",
    },
  },
  {
    id: "completed-todos",
    label: "Completed todos",
    icons: {
      selected: "/src/assets/icons/Completed-Selected.svg",
      notSelected: "/src/assets/icons/Completed-NotSelected.svg",
    },
  },
];

export default menuItems;
