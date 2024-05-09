export interface ICertificate{
    nome: string,
    empresa: string,
    dataEmissao: string,
    descricao: string;
    codigoCredencial: string,
    urlDaCredencial: string;
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