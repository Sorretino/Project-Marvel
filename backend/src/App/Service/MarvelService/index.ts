/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable prefer-template */
import type { Request, Response } from "express";
import "dotenv/config";
import CreateLog from "~/Domain/UseCases/ManageLog/CreateLog";
import api from "~/Infra/services/apiMarvel";
import type { LogProps } from "~/Shared/PropTypes/LogProps";
import { Console } from "console";

const MARVEL_SEC: string = process.env.MARVEL_SEC ?? "";

class MarvelService {
  async getCharacters(req: Request, res: Response) {
    const { offset, name, comics, series, events, stories } = req.query;
    let ParamsReport = "params => ";
    let URI = `characters${MARVEL_SEC}`;
    if (offset) {
      URI += `&offset=${offset}`;
      ParamsReport += ` | offset=${offset}`;
    }

    if (name) {
      URI += `&name=${name}`;
      ParamsReport += ` | name=${name}`;
    }
    if (comics) {
      URI += `&comics=${comics}`;
      ParamsReport += ` | comics=${comics}`;
    }
    if (series) {
      URI += `&series=${series}`;
      ParamsReport += ` | series=${series}`;
    }
    if (events) {
      URI += `&events=${events}`;
      ParamsReport += ` | events=${events}`;
    }
    if (stories) {
      URI += `&stories=${stories}`;
      ParamsReport += ` | stories=${stories}`;
    }
    console.log("console", URI);
    const { data }: any = await api.get(URI);
    const props: LogProps = {
      url: "characters",
      params: ParamsReport,
    };
    await CreateLog.execute(props);
    res.status(200).json(data);
  }

  async getCharacter(req: Request, res: Response) {
    const { id } = req.params;
    const { data } = await api.get(`characters/${id}${MARVEL_SEC}`);
    const props: LogProps = {
      url: `characters/${id}`,
      params: "",
    };
    await CreateLog.execute(props);
    res.status(200).json(data);
  }
}

export const marvelService = new MarvelService();
