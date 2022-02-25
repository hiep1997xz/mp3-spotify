import React from "react";

const ListSong = () => {
  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>2</td>
            <td className="text-center">3</td>
            <td className="text-center">4</td>
            <td className="text-center">5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
