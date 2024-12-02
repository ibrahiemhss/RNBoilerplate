import { fetchService } from 'services/fetchService';
import { DataModel } from 'models/data.model';

export const getSimpleDataApi = async (): Promise<DataModel[]> => {
  try {
    return fetchService.get<DataModel[]>(`get_data_end_point_url`);
  } catch (error: any) {
    throw new Error(error);
  }
};
