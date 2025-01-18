interface Props {
  title: string;
  listItem: { listData: string[] }[];
}

const FooterMiddleList = ({ title, listItem }: Props) => {
  return (
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-0.5 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data: string) => (
            <li key={data} className="footerLink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
