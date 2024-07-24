export interface IAwards{
    titulo: string,
    local: string,
    data: string,
    descricao: string;
    src1: string;
    alt1: string;
    src2: string;
    alt2: string;
    links: [
        {
          name: string;
          href: string;
        }
      ];
}