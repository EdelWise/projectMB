import React from "react";
import axios from "axios";
import { urlRead, urlCreate, urlDelete } from "../endpoints";

export default function Contacts() {
  const [data, setData] = React.useState([]);
  const [domainButtons, setDomainButtons] = React.useState([]);
  const [domainFilter, setDomainFilter] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");

  async function getData() {
    try {
      const response = await axios.get(urlRead);
      console.log(response);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteEntry(index) {
    try {
      const response = await axios.post(urlDelete, { id: index });
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      getData();
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    uniqueDomains();
  }, [data]);

  function sortData(e) {
    const objs = [...data];
    const name = e.target.id;
    console.log(name);

    function compare(a, b) {
      if (a[name] < b[name]) {
        return -1;
      }
      if (a[name] > b[name]) {
        return 1;
      }
      return 0;
    }

    objs.sort(compare);
    setData(objs);
  }

  function uniqueDomains() {
    const unique = [...new Set(data.map((item) => item.domain))];
    setDomainButtons(unique);
  }

  function handleDomainFilterButton(e) {
    setDomainFilter(e.target.id);
  }

  return (
    <div>
      {domainButtons.map((item, index) => {
        return (
          <button onClick={handleDomainFilterButton} key={index} id={item}>
            {item}
          </button>
        );
      })}
      <button onClick={() => setDomainFilter("")}>show all</button>
      <input
        placeholder="search/filter"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th></th>
            <th id="email" onClick={sortData}>
              email
              <button id="email" onClick={sortData}>
                sort
              </button>
            </th>
            <th id="domain" onClick={sortData}>
              domain{" "}
              <button id="domain" onClick={sortData}>
                sort
              </button>
            </th>
            <th id="date" onClick={sortData}>
              date{" "}
              <button id="date" onClick={sortData}>
                sort
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((row) => {
              if (domainFilter.length > 0) {
                return row.domain === domainFilter;
              }
              if (searchInput.length > 0) {
                return row.email
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              } else {
                return row;
              }
            })
            .map((row) => {
              return (
                <tr key={row.id}>
                  <th>
                    <button onClick={() => deleteEntry(row.id)}>delete</button>
                  </th>
                  <th>{row.email}</th>
                  <th>{row.domain}</th>
                  <th>{row.date}</th>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
}
