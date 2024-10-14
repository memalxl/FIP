import { Vacancy as TVacancy } from "../api/vacancy/Vacancy";

export const VACANCY_TITLE_FIELD = "id";

export const VacancyTitle = (record: TVacancy): string => {
  return record.id?.toString() || String(record.id);
};
