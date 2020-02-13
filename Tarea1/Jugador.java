class Jugador{
    public String nombreCompleto;
    public String Apellido;
    public int ci;
    public int edad;

    public Jugador(String nombre, String apellido, int ci, int edad)
    {
        this.nombreCompleto = nombre;
        this.Apellido = apellido;
        this.ci = ci;
        this.edad = edad;
    }

    public String getNombreCompleto(){
        return this.nombreCompleto;
    }

    public void setNombreCompleto(String nombre){
       
        this.nombreCompleto = nombre;
    }

    public String getApellido()
    {
        return this.Apellido;
    }

    public void setApellido(String apellido)
    {
        
        this.Apellido = apellido;
    }

    public String getCi()
    {
        return this.ci.toString();
    }

    public void setCi(int ci)
    {
        this.ci = ci;
    }

    public String getEdad(){
        return this.edad.toString();   
    }

    public void setEdad(int edad)
    {
        this.edad = edad;
    }

    public void imprimir()
    {
        System.println(this.nombreCompleto);
        System.println(this.Apellido);
        System.println(this.ci);
        System.println(this.edad);


    }


}