export interface ImgbbResponse {
  data: {
    id: string;
    url: string;
    display_url: string;
    delete_url: string;
  };
  success: boolean;
  status: number;
}
