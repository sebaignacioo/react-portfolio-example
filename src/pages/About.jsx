import {
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
  HiOutlineCheck,
  HiOutlineUser,
  HiOutlineQuestionMarkCircle,
  HiOutlineInformationCircle,
  HiOutlineChartPie,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const feedItems = [
  {
    id: 1,
    content: "Logro personal",
    target: "en disciplina",
    href: "#",
    date: "20 Sep",
    icon: HiOutlineUser,
    iconBackground: "bg-zinc-700",
  },
  {
    id: 2,
    content: "Logro académico",
    target: "en la universidad",
    href: "#",
    date: "22 Sep",
    icon: HiOutlineAcademicCap,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completó",
    target: "curso",
    href: "#",
    date: "28 Sep",
    icon: HiOutlineCheck,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Fue ascendido",
    target: "a jefe de proyecto",
    href: "#",
    date: "30 Sep",
    icon: HiOutlineBuildingOffice2,
    iconBackground: "bg-blue-500",
  },
];

const statsItems = [
  {
    id: 1,
    name: "Aportes Open Source",
    statValue: "31K",
    statDesc: "01 Ene - 01 Feb",
    icon: HiOutlineInformationCircle,
  },
  {
    id: 2,
    name: "Nuevas publicaciones",
    statValue: "4,200",
    statDesc: "↗︎ 400 (22%)",
    icon: HiOutlineChartPie,
  },
  {
    id: 3,
    name: "Nuevos clientes",
    statValue: "1,200",
    statDesc: "↘︎ 90 (14%)",
    icon: HiOutlineUserGroup,
  },
];

export default function About() {
  return (
    <div className="px-5">
      <h1 className="text-xl flex gap-x-2 items-center py-8 text-primary-content">
        <HiOutlineQuestionMarkCircle /> Sobre mi
      </h1>
      <h1 className="text-lg flex gap-x-2 items-center py-8 text-primary-content/75">
        Stats
      </h1>
      <div className="flex justify-center">
        <div className="stats shadow">
          {statsItems.map((item, idItem) => (
            <div className="stat" key={idItem}>
              <div className="stat-figure text-secondary">
                <item.icon className="inline-block w-8 h-8 stroke-current" />
              </div>
              <div className="stat-title">{item.name}</div>
              <div className="stat-value">{item.statValue}</div>
              <div className="stat-desc">{item.statDesc}</div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-lg flex gap-x-2 items-center py-8 text-primary-content/75">
        Feed
      </h1>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {feedItems.map((item, idItem) => (
            <li key={item.id}>
              <div className="relative pb-8">
                {idItem !== feedItems.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-base-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={`${item.iconBackground} h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-accent`}
                    >
                      <item.icon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex flex-1 justify-between space-x-4">
                    <div>
                      <p className="text-sm text-primary-content">
                        {item.content}{" "}
                        <a href={item.href} className="font-medium text-accent">
                          {item.target}
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-info-content">
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
