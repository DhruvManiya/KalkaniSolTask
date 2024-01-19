import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState, useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import _debounce from "lodash/debounce";
import CharCards from "../components/CharCards";

let randomNumber = Math.random() * 100;

const Home = () => {
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [searchparam, setSearchParam] = useState("");
  const [charDataStack, setCharDataStack] = useState(null);

  const inputRef = useRef();

  const handlePageChange = async (event, value) => {
    try {
      scroll(0, 0);
      setPage(value);
      const data = await axios.get(
        `https://api.jikan.moe/v4/characters?page=${value}&limit=15&q=${searchparam}&order_by=favorites&sort=desc`
      );
      setCharDataStack(data.data.data);
      setLastPage(data.data.pagination.last_visible_page);
      setTotalChar(data.data.pagination.items.total);
    } catch (e) {
      console.log(e);
    }
  };

  const debounceSearchCharecter = useCallback(
    _debounce(async (val) => {
      setPage(1);
      const data = await axios.get(
        `https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${val}&order_by=favorites&sort=desc`
      );
      setLastPage(data.data.pagination.last_visible_page);
      setTotalChar(data.data.pagination.items.total);
      setCharDataStack(data.data.data);
    }, 350),
    []
  );

  useEffect(() => {
    debounceSearchCharecter(searchparam);
    return debounceSearchCharecter.cancel;
  }, [searchparam, debounceSearchCharecter]);

  return (
    <>
      <div className="w-full h-[26.875rem] fixed -z-30">
        <img
          src="/bg3.jpg"
          alt=""
          className="absolute h-full w-full object-cover -z-20"
        />
        <div className="absolute h-full w-full bg-black/60 -z-20"></div>
      </div>
      <main>
        <section className="w-full h-[26.875rem] flex justify-center items-center relative">
          <div className="flex flex-col gap-8 items-center">
            <h1 className="Permanent text-white lg:text-[4rem] sm:text-[3.5rem] text-[2.5rem] z-30 text-center">
              Search your{" "}
              <span
                className={
                  randomNumber > 40
                    ? randomNumber > 60
                      ? randomNumber > 80
                        ? "text-Yellow"
                        : "text-Orange"
                      : "text-Teal"
                    : randomNumber > 20
                    ? "text-Green"
                    : "text-Blue"
                }
              >
                anime
              </span>{" "}
              charecters
            </h1>
            <div className=" h-10 flex justify-center items-center z-30 px-8 w-full">
              <span
                className="h-full w-12 bg-white rounded-l-[1.5rem] flex justify-center items-center"
                onClick={() => inputRef.current.focus()}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={
                    randomNumber > 40
                      ? randomNumber > 60
                        ? randomNumber > 80
                          ? "text-Blue"
                          : "text-Orange"
                        : "text-Yellow"
                      : randomNumber > 20
                      ? "text-Teal"
                      : "text-Green"
                  }
                />{" "}
              </span>
              <input
                type="search"
                placeholder="Search your favourite charecters"
                className="h-full w-full outline-none px-4 py-2 rounded-r-[1.5rem] text-[1.5rem] Shadows"
                ref={inputRef}
                onChange={(e) => setSearchParam(e.target.value)}
              />
            </div>
            <p className="text-white sm:text-[2rem] text-[1.5rem] text-center">
              Total{" "}
              <span
                className={
                  randomNumber > 40
                    ? randomNumber > 60
                      ? randomNumber > 80
                        ? "text-Green"
                        : "text-Blue"
                      : "text-Yellow"
                    : randomNumber > 20
                    ? "text-Teal"
                    : "text-Orange"
                }
              >
                {new Intl.NumberFormat("en-IN").format(totalChar)}
              </span>{" "}
              matching anime charecters found
            </p>
          </div>
          <div className=" absolute bottom-0 h-[15rem] w-full bg-gradient-to-t from-[#111] to-transparent -z-10 shadow-xl"></div>
        </section>
        {totalChar !== 0 ? (
          <section className=" bg-[#111] text-white flex flex-col items-center justify-center relative">
            {charDataStack ? (
              <ul className="m-12 md:w-[90%] w-[95%] flex flex-col justify-center items-center gap-12">
                {charDataStack.map((char) => (
                  <li
                    className={`w-full py-4 md:px-16 px-6 rounded-md border-[2px] border-b-[6px] ${
                      (Number(char.mal_id) * randomNumber) % 5 > 2
                        ? (Number(char.mal_id) * randomNumber) % 5 > 3
                          ? (Number(char.mal_id) * randomNumber) % 5 > 4
                            ? "border-Yellow hover:bg-Yellow/20"
                            : "border-Orange hover:bg-Orange/20"
                          : "border-Teal hover:bg-Teal/20"
                        : (Number(char.mal_id) * randomNumber) % 5 > 1
                        ? "border-Green hover:bg-Green/20"
                        : "border-Blue hover:bg-Blue/20"
                    }`}
                    key={char.mal_id}
                  >
                    <CharCards data={char} randomNumber={randomNumber} />
                  </li>
                ))}
              </ul>
            ) : (
              <div>Not Found</div>
            )}
            {lastPage !== 0 && (
              <div className="mb-8">
                <Pagination
                  count={lastPage}
                  page={page}
                  showFirstButton
                  showLastButton
                  variant="outlined"
                  color="primary"
                  shape="rounded"
                  onChange={handlePageChange}
                />
              </div>
            )}
          </section>
        ) : (
          <p className="text-[2.5rem] text-white flex justify-center items-center w-full">
            No{"  "}
            <span
              className={
                randomNumber > 40
                  ? randomNumber > 60
                    ? randomNumber > 80
                      ? "text-Yellow"
                      : "text-Orange"
                    : "text-Teal"
                  : randomNumber > 20
                  ? "text-Green"
                  : "text-Blue"
              }
            >
              charecters
            </span>
            {"  "}
            found
          </p>
        )}
      </main>
    </>
  );
};

export default Home;
