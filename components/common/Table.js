import React from "react";

const Table = ({title,table}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center  pr-[10%] pl-[10%] mt-20">
      <p className="text-4xl font-semibold ">{title}</p>
      <p className="w-16 h-1 rounded-full mt-5 bg-slate-400"></p>
      <table class="table-auto ">
        <thead>
          <tr>
            <th className="p-1 pr-3 pl-3">Our Programs Title	</th>
            <th className="p-1 pr-3 pl-3">Type</th>
            <th className="p-1 pr-3 pl-3">Duration</th>
            <th className="p-1 pr-3 pl-3">Materials</th>
            <th className="p-1 pr-3 pl-3">Nature</th>
          </tr>
        </thead>
        <tbody>
          
          {table.map((item,i)=>(
            <tr key={i}>
            <td className="p-1 pr-3 pl-3">{item.Title}</td>
            <td className="p-1 pr-3 pl-3">{item.Type}</td>
            <td className="p-1 pr-3 pl-3">{item.Duration}</td>
            <td className="p-1 pr-3 pl-3">{item.Materials}</td>
            <td className="p-1 pr-3 pl-3">{item.Nature}</td>
            </tr>
          ))}
           
        </tbody>
      </table>
    </div>
  );
};

export default Table;
